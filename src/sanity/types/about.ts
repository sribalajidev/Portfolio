import { SanityImage } from "./image";

export interface Trait {
  _key: string;
  image: SanityImage;
  name: string;
  description: string;
}

export interface Collaboration {
  title: string;
  subtitle: string;
  traits: Trait[];
}

export interface Step {
  _key: string;
  number: number;
  title: string;
  detail: string;
}

export interface Process {
  title: string;
  subtitle: string;
  steps: Step[];
}

export interface Timezone {
  title: string;
  subtitle: string;
  locations: string[];
}

export interface About {
  subtitle: string;
  title: string;
  description: string;
  collaboration: Collaboration;
  process: Process;
  timezone: Timezone;
}