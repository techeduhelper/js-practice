import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { saveProgress } from '../utils/storage';
import { 
  Button, 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Alert, 
  IconButton, 
  Chip,
  Snackbar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TimerIcon from '@mui/icons-material/Timer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Editor from '@monaco-editor/react';

const QuestionSolver = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const question = questions.find(q => q.id === parseInt(id));
  const [code, setCode] = useState(question?.starterCode || '');
  const [testResults, setTestResults] = useState(null);
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [score, setScore] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    if (!question) {
      navigate('/');
    }
  }, [question, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.round((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runTests = () => {
    try {
      const fn = new Function(`return ${code}`)();
      const results = question.testCases.map(test => {
        try {
          const result = fn(...test.input);
          const passed = JSON.stringify(result) === JSON.stringify(test.expected);
          return {
            passed,
            input: test.input,
            expected: test.expected,
            output: result
          };
        } catch (error) {
          return {
            passed: false,
            input: test.input,
            expected: test.expected,
            error: error.message
          };
        }
      });

      setTestResults(results);

      // Calculate score and save progress
      const passedTests = results.filter(r => r.passed).length;
      const totalTests = results.length;
      const newScore = Math.round((passedTests / totalTests) * 100);
      setScore(newScore);

      if (newScore === 100) {
        saveProgress(question.id, newScore, timeSpent);
        setSnackbar({
          open: true,
          message: 'Great job! All tests passed!',
          severity: 'success'
        });
      } else {
        setSnackbar({
          open: true,
          message: `${passedTests} out of ${totalTests} tests passed`,
          severity: 'warning'
        });
      }
    } catch (error) {
      setTestResults([{ passed: false, error: error.message }]);
      setSnackbar({
        open: true,
        message: 'Error in code: ' + error.message,
        severity: 'error'
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  if (!question) {
    return (
      <Container>
        <Typography>Question not found</Typography>
        <Button onClick={() => navigate('/')}>Back to Questions</Button>
      </Container>
    );
  }

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  };

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      {/* Header - Fixed */}
      <Box sx={{ 
        position: 'sticky',
        top: 0,
        p: 3, 
        borderBottom: 1, 
        borderColor: 'divider',
        bgcolor: 'background.paper',
        zIndex: 1
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" component="h1">
            {question.id}. {question.title}
          </Typography>
        </Box>
      </Box>

      {/* Scrollable Content */}
      <Box sx={{ 
        flexGrow: 1, 
        overflow: 'auto',
        p: 3,
        '&::-webkit-scrollbar': {
          width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555'
        }
      }}>
        {/* Question Info */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>Description:</Typography>
          <Typography paragraph>{question.description}</Typography>
          
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            {question.topics.map(topic => (
              <Paper key={topic} variant="outlined" sx={{ px: 1, py: 0.5 }}>
                <Typography variant="body2">{topic}</Typography>
              </Paper>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Chip
              icon={<TimerIcon />}
              label={formatTime(timeSpent * 1000)}
              color="primary"
              variant="outlined"
            />
            {score > 0 && (
              <Chip
                icon={<EmojiEventsIcon />}
                label={`Score: ${score}`}
                color="success"
                variant="outlined"
              />
            )}
          </Box>
        </Paper>

        {/* Code Editor */}
        <Paper sx={{ mb: 4 }}>
          <Editor
            height="400px"
            language="javascript"
            defaultLanguage="javascript"
            value={code}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              lineNumbers: 'on',
              wordWrap: 'on',
              automaticLayout: true
            }}
          />
        </Paper>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <Button 
            variant="contained" 
            color="success" 
            onClick={runTests}
            size="large"
          >
            Run Tests
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={toggleSolution}
            size="large"
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </Button>
        </Box>

        {/* Solution */}
        {showSolution && (
          <Paper sx={{ p: 3, mb: 4, bgcolor: 'success.light' }}>
            <Typography variant="h6" gutterBottom color="white">
              Solution:
            </Typography>
            <Editor
              height="300px"
              defaultLanguage="javascript"
              value={question.solution}
              theme="vs-dark"
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                wordWrap: 'on',
                automaticLayout: true
              }}
            />
          </Paper>
        )}

        {/* Test Results */}
        {testResults && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Test Results:</Typography>
            {testResults.map((result, index) => (
              <Alert 
                key={index} 
                severity={result.passed ? "success" : "error"}
                sx={{ mb: 2 }}
              >
                <Typography variant="subtitle1">
                  Test Case {index + 1}: {result.passed ? "Passed" : "Failed"}
                </Typography>
                {!result.error && (
                  <>
                    <Typography variant="body2">Input: {JSON.stringify(result.input)}</Typography>
                    <Typography variant="body2">Expected: {JSON.stringify(result.expected)}</Typography>
                    <Typography variant="body2">
                      Output: {JSON.stringify(result.output)}
                    </Typography>
                  </>
                )}
                {result.error && (
                  <Typography variant="body2" color="error">
                    Error: {result.error}
                  </Typography>
                )}
              </Alert>
            ))}
          </Paper>
        )}
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default QuestionSolver;
