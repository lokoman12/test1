import { QuestionnaireData } from 'src/types';

export type MainQuestionnaireData = Pick<QuestionnaireData, 'firstName' | 'username' | 'tags' | 'purpose'>;
