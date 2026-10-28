export interface NavLink{
  name: string;
  href: string;
}

export interface Data{
  name: string;
  dob: string;
  residentSince: string;
  sections: NavLink[];
  status: string;
}

export interface Command{
  command: string;
  output: string;
}
