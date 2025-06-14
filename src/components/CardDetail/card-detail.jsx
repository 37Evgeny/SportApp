import CloseIcon from "@mui/icons-material/Close"; // иконка закрытия
import BasicRating from "../Rating/rating"; // ваш компонент рейтинга
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";

export default function PostDetail({ post, onClose }) {
  const {
    title,
    text,
    description,
    plan,
  } = post;

  return (
    <Card
      sx={{
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Верхняя часть с изображением и кнопкой */}
      <div style={{ position: "relative" }}>
        {/* Кнопка закрытия */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255,255,255,0.7)",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>

      {/* Основной контент */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Заголовок */}
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        {/* Текстовое описание */}
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {text}
        </Typography>

        {/* Описание комплекса или текста */}
        {description && (
          <Typography variant="body2" sx={{ whiteSpace: "pre-line", mt: 2 }}>
            {description}
          </Typography>
        )}

        {/* План тренировок и упражнения */}
        {plan && (
          <>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              План тренировки:
            </Typography>
            {/* Общие рекомендации */}
            {plan.weeklySchedule && (
              <>
                <Typography variant="body2" gutterBottom>
                  Частота тренировок в неделю: {plan.frequencyPerWeek} раз(а)
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Время отдыха между подходами: {plan.restBetweenSets}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Время отдыха между упражнениями: {plan.restBetweenExercises}
                </Typography>
                {/* Расписание по дням недели */}
                <Typography variant="body2" gutterBottom>
                  Расписание:
                </Typography>
                {plan.weeklySchedule.map((dayInfo, index) => (
                  <Typography key={index} variant="body2" sx={{ ml: 1 }}>
                    {dayInfo.day}: {dayInfo.workoutName || 'Отдых'}
                  </Typography>
                ))}
              </>
            )}

            {/* Детали упражнений */}
            {plan.workoutsDetails && Object.keys(plan.workoutsDetails).map((workoutName) => (
              <div key={workoutName} style={{ marginTop: '16px' }}>
                <Typography variant="h6">{workoutName}</Typography>
                {plan.workoutsDetails[workoutName].map((exercise, idx) => (
                  <Typography key={idx} variant="body2" sx={{ whiteSpace: "pre-line", ml: 2 }}>
                    {`- ${exercise.name}\nКоличество подходов: ${exercise.setsRange[0]}-${exercise.setsRange[1]}\ подходов\nПовторения в подходе: ${exercise.repsRange[0]}-${exercise.repsRange[1]}`}
                  </Typography>
                ))}
              </div>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
}