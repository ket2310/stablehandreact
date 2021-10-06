import { gql } from '@apollo/client';

export const BOOK_LESSON = gql`
mutation bookLesson $lesson: LessonData!) {
  
    bookLesson (lesosn: $lesson)
        token
        lesson  {
        startTime
        endTime
        duration
        rider
        instructor
        horse

    }  
}
`;
