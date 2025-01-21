import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Tabs,
  Tab,
  LinearProgress,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimerIcon from '@mui/icons-material/Timer';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import { questions } from '../data/questions';
import { getProgress } from '../utils/storage';
import Editor from '@monaco-editor/react';

const QuestionList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [progress, setProgress] = useState(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editorCode, setEditorCode] = useState('');
  const [editorOutput, setEditorOutput] = useState('');

  // Load progress on mount
  useEffect(() => {
    setProgress(getProgress());
  }, []);

  // Calculate all questions that match the search term and difficulty
  const baseFilteredQuestions = React.useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = !searchTerm ||
        q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficulty === 'all' ||
        q.difficulty.toLowerCase() === difficulty.toLowerCase();
      return matchesSearch && matchesDifficulty;
    });
  }, [searchTerm, difficulty]);

  // Further filter based on selected topic
  const filteredQuestions = React.useMemo(() => {
    if (selectedTopic === 'all') {
      return baseFilteredQuestions;
    }
    return baseFilteredQuestions.filter(q => Array.isArray(q.topics) && q.topics.includes(selectedTopic));
  }, [baseFilteredQuestions, selectedTopic]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'success';
      case 'medium': return 'warning';
      case 'hard': return 'error';
      default: return 'default';
    }
  };

  // Count questions for each topic based on current search and difficulty filters
  const questionsByTopic = React.useMemo(() => {
    const counts = {
      all: baseFilteredQuestions.length
    };

    questions.forEach(question => {
      if (Array.isArray(question.topics)) {
        question.topics.forEach(topic => {
          counts[topic] = (counts[topic] || 0) + 1;
        });
      }
    });

    return counts;
  }, [baseFilteredQuestions]);

  const questionsByDifficulty = React.useMemo(() => ({
    all: filteredQuestions.length,
    easy: filteredQuestions.filter(q => q.difficulty.toLowerCase() === 'easy').length,
    medium: filteredQuestions.filter(q => q.difficulty.toLowerCase() === 'medium').length,
    hard: filteredQuestions.filter(q => q.difficulty.toLowerCase() === 'hard').length,
  }), [filteredQuestions]);

  const handleTopicChange = (event, newTopic) => {
    setSelectedTopic(newTopic);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 1000 / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  };

  const handleCompilerOpen = () => {
    setEditorOpen(true);
  };

  const handleCompilerClose = () => {
    setEditorOpen(false);
    setEditorCode('');
    setEditorOutput('');
  };

  const runCode = () => {
    try {
      // Create a safer evaluation environment with console capture
      let output = '';
      const mockConsole = {
        log: (...args) => {
          output += args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' ') + '\n';
        },
        error: (...args) => {
          output += 'Error: ' + args.join(' ') + '\n';
        }
      };

      // Create a function with console reference
      const func = new Function('console', editorCode);
      func(mockConsole);
      
      // If there's no console output but there's a return value, show that instead
      if (!output) {
        try {
          const result = eval(editorCode);
          if (result !== undefined) {
            output = typeof result === 'object' 
              ? JSON.stringify(result, null, 2) 
              : String(result);
          }
        } catch (e) {
          // Ignore eval errors if we already have console output
        }
      }

      setEditorOutput(output || 'No output');
    } catch (error) {
      setEditorOutput('Error: ' + error.message);
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100%',
        width: '100vw',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h3" gutterBottom>
          JavaScript Practice Questions
        </Typography>

        {progress && (
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>Your Progress</Typography>
            <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Questions Solved</Typography>
                <Typography variant="h4">
                  {Object.keys(progress?.scores || {}).length} / {questions.length}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Total Score</Typography>
                <Typography variant="h4">
                  {Object.values(progress?.scores || {}).reduce((a, b) => a + b, 0)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Time Spent</Typography>
                <Typography variant="h4">
                  {formatTime(Object.values(progress?.times || {}).reduce((a, b) => a + b, 0))}
                </Typography>
              </Box>
            </Box>
            <LinearProgress
              variant="determinate"
              value={(Object.keys(progress?.scores || {}).length / questions.length) * 100}
              sx={{ height: 10, borderRadius: 5 }}
            />
          </Paper>
        )}
        <Paper sx={{ p: 2, mb: 2 }}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ flexGrow: 1 }}
            />
            
            <Button
              variant="contained"
              size="large"
              color="primary"
              startIcon={<CodeIcon />}
              onClick={handleCompilerOpen}
            >
              Compiler
            </Button>

            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Difficulty</InputLabel>
              <Select
                value={difficulty}
                label="Difficulty"
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <MenuItem value="all">All ({questionsByDifficulty.all})</MenuItem>
                <MenuItem value="easy">Easy ({questionsByDifficulty.easy})</MenuItem>
                <MenuItem value="medium">Medium ({questionsByDifficulty.medium})</MenuItem>
                <MenuItem value="hard">Hard ({questionsByDifficulty.hard})</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>

        <Paper sx={{ mb: 2 }}>
          <Tabs
            value={selectedTopic}
            onChange={handleTopicChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab
              label={`All (${questionsByTopic.all})`}
              value="all"
            />
            {Object.keys(questionsByTopic).filter(topic => topic !== 'all').map(topic => (
              <Tab
                key={topic}
                label={`${topic} (${questionsByTopic[topic] || 0})`}
                value={topic}
              />
            ))}
          </Tabs>
        </Paper>
      </Box>

      <Box sx={{
        height: '100vh',
        flexGrow: 1,
        overflow: 'auto',
        p: 3,
        pt: 2,
      }}>
        <Grid container spacing={3}>
          {filteredQuestions.map((question, index) => (
            <Grid item xs={12} sm={6} md={4} key={`question-${question.id}-${index}`}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[4]
                  }
                }}
                onClick={() => navigate(`/question/${question.id}`)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h6" component="div">
                        {question.id}. {question.title}
                      </Typography>
                      {progress?.solved.includes(question.id) && (
                        <Tooltip title="Solved">
                          <CheckCircleIcon color="success" />
                        </Tooltip>
                      )}
                    </Box>
                    <Chip
                      label={question.difficulty}
                      color={getDifficultyColor(question.difficulty)}
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    mb: 2
                  }}>
                    {question.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {question.topics.map(topic => (
                      <Chip
                        key={topic}
                        label={topic}
                        size="small"
                        variant="outlined"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTopic(topic);
                        }}
                      />
                    ))}
                  </Box>
                  {progress && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {progress?.times && progress.times[question.id] && (
                        <Tooltip title="Time Spent">
                          <Chip
                            icon={<TimerIcon />}
                            label={formatTime(progress.times[question.id])}
                            size="small"
                            variant="outlined"
                          />
                        </Tooltip>
                      )}
                      {progress?.scores && progress.scores[question.id] && (
                        <Tooltip title="Your Score">
                          <Chip
                            icon={<CheckCircleIcon />}
                            label={progress.scores[question.id]}
                            size="small"
                            variant="outlined"
                            color="success"
                          />
                        </Tooltip>
                      )}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog
        open={editorOpen}
        onClose={handleCompilerClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Code Compiler
          <IconButton
            aria-label="close"
            onClick={handleCompilerClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <Editor
              height="300px"
              language="javascript"
              value={editorCode}
              onChange={setEditorCode}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                lineNumbers: 'on',
                wordWrap: 'on',
                automaticLayout: true
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="success"
            onClick={runCode}
            sx={{ mb: 2 }}
          >
            Run Code
          </Button>
          {editorOutput && (
            <Paper
              sx={{
                p: 2,
                bgcolor: 'grey.900',
                color: 'common.white',
                fontFamily: 'monospace'
              }}
            >
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                {editorOutput}
              </pre>
            </Paper>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default QuestionList;
