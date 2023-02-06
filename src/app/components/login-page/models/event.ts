import { DateModel } from "./date-model";

export interface GoogleEvent {
  summary: string;
  location: string;
  description: string;
  start: DateModel;
  end: DateModel;
}
