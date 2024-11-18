import React from "react";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

const Result = ({ userName, questions, answers, score }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
       {userName} Ваш результат: {score} / {questions.length}
      </Typography>

      <List>
        {questions.map((question, index) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === question.correct;

          return (
            <ListItem
              key={index}
              sx={{
                backgroundColor: isCorrect ? "rgba(76, 175, 80, 0.2)" : "rgba(244, 67, 54, 0.2)",
                borderRadius: 2,
                marginBottom: 1,
              }}
            >
              <ListItemIcon>
                {isCorrect ? (
                  <CheckCircle sx={{ color: "green" }} />
                ) : (
                  <Cancel sx={{ color: "red" }} />
                )}
              </ListItemIcon>

              <ListItemText
                primary={
                  <>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {question.question}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: isCorrect ? "green" : "red", fontWeight: "bold" }}
                    >
                      Ваша відповідь: {userAnswer || "Не відповів"}
                    </Typography>
                    {!isCorrect && (
                      <Typography
                        variant="body2"
                        sx={{ color: "green", fontStyle: "italic" }}
                      >
                        Правильна відповідь: {question.correct}
                      </Typography>
                    )}
                  </>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Result;
