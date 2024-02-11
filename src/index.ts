type User = {
  name: string;
  age: number;
  role?: string;
};

const user: User = {
  name: "bob",
  age: 12,
};

const admin: User = {
  name: "John",
  age: 23,
  role: "Admin",
};