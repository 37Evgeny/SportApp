import CloseIcon from "@mui/icons-material/Close"; // иконка закрытия

import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CardDetail({ post, onClose }) {
  const {
    title,
    description,
    plan,
  } = post;



  return (
    <Card
      sx={{
        width: { xs: '90%', sm: '80%', md: '70%' },
        maxWidth: 800,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 3,
        position: 'relative',
        margin: 'auto',
      }}
    >
      {/* Кнопка закрытия */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)',
          },
          zIndex: 10,
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Основной контент */}
      <CardContent
        sx={{
          padding: 3,
          overflowY: 'auto',
          flexGrow: 1,
        }}
      >
        {/* Заголовок */}
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
        >
          {title}
        </Typography>

        {/* Описание комплекса или текста */}
        {description && (
          <Typography
            variant="body2"
            sx={{
              whiteSpace: "pre-line",
              mb: 3,
              paddingX: 1,
              backgroundColor: '#f5f5f5',
              borderRadius: 1,
              paddingY: 1,
            }}
          >
            {description}
          </Typography>
        )}

        {/* План тренировок и упражнения */}
        {plan && (
          <>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mt: 4, mb: 2, fontWeight:'bold' }}
            >
              План тренировки:
            </Typography>

            {/* Общие рекомендации */}
            {plan.weeklySchedule && (
              <>
                <Box sx={{ mb:2 }}>
                  <Typography variant="body2" gutterBottom>
                    Частота тренировок в неделю:{' '}
                    <strong>{plan.frequencyPerWeek}</strong> раз(а)
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Время отдыха между подходами:{' '}
                    <strong>{plan.restBetweenSets}</strong>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Время отдыха между упражнениями:{' '}
                    <strong>{plan.restBetweenExercises}</strong>
                  </Typography>
                </Box>

                {/* Расписание по дням недели */}
                <Box sx={{ mb:3 }}>
                  <Typography variant="body2" gutterBottom>
                    Расписание:
                  </Typography>
                  {plan.weeklySchedule.map((dayInfo, index) => (
                    <Typography key={index} variant="body2" sx={{ ml: 2 }}>
                      {dayInfo.day}: {dayInfo.workoutName || 'Отдых'}
                    </Typography>
                  ))}
                </Box>
              </>
            )}

           {plan.workoutsDetails && Object.keys(plan.workoutsDetails).map((dayName) => (
  <Box key={dayName} sx={{ mb: 3 }}>
    {/* Название дня */}
    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
      {dayName}
    </Typography>
    {/* Упражнения в этот день */}
    {plan.workoutsDetails[dayName].map((exercise, idx) => (
      <Accordion key={idx} sx={{ mb: '8px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`exercise-${dayName}-${idx}-content`}
          id={`exercise-${dayName}-${idx}-header`}
        >
          <Typography variant="subtitle1">{exercise.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ whiteSpace: 'pre-line' }}>
            {`Количество подходов: ${exercise.setsRange[0]}-${exercise.setsRange[1]}\n` +
             `Повторения в подходе: ${exercise.repsRange[0]}-${exercise.repsRange[1]}` +
             (exercise.description ? `\nОписание:\n${exercise.description}` : '')}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
))}
            
          </>
        )}
      </CardContent>
    </Card>
  );
}