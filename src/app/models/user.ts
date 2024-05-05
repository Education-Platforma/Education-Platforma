export interface Student {
    name: string;
    country: string;
    region: string;
    total: number;
    completed: number;
    learningTime: string;
  }
  
  export const STUDENTS: Student[] = [
    {
      name: 'kattamen', // Maqsudkhan😎
    //student ismi bilan bir xil bo`lishikerak rasm nomi va format png.        
      country: 'Uzbekistan',
      region: 'Qashqadaryo',
      total: 45321,
      completed: 245,
      learningTime: '240h 39m'
    },
    {
        name: 'conan', 
        country: 'Uzbekistan',
        region: 'Fargona',
        total: 3201,
        completed: 135,
        learningTime: '131h 41m'
      },
    // Add more student objects as needed
  ];