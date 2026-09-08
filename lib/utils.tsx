import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function getAge(dateOfBirth: string | Date): number {
  const today = new Date();
  const dob= typeof dateOfBirth === "string" ? new Date(dateOfBirth) : dateOfBirth;

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

export function cn(...inputs:ClassValue[]): string {
  return twMerge(clsx(inputs));
}