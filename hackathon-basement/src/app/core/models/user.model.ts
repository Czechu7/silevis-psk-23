export interface User {
  id: number;
  firstName: string;
  lastName: string;
  staffStatus: number;
  studentStatus: number;
  email: string;
  studentNumber: number | string;
  studentProgrammes: studentProgramee[];
}

export interface studentProgramee {
  id: number;
  programme: string;
}
