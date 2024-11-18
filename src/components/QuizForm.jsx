import React from "react";
import { Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

const QuizForm = ({ questions, answers, onAnswerChange, onSubmit }) => {
  return (
    <Box maxWidth={600} margin="0 auto" padding="20px">
      <Typography variant="h5" gutterBottom>
        Опитування
      </Typography>
      <form>
        {questions.map((question, index) => (
          <FormControl key={index} margin="normal" fullWidth>
            <FormLabel>{question.question}</FormLabel>
            <RadioGroup
              value={answers[index] || ""}
              onChange={(e) => onAnswerChange(index, e.target.value)}
            >
              {question.options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ))}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          onClick={onSubmit}
        >
          Завершити
        </Button>
      </form>
    </Box>
  );
};

export default QuizForm;
