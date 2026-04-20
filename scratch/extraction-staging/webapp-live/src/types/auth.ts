export interface UserProfile {
  agentId: string;
  avatar: string;
  completedModules: number;
  email: string;
  id: string;
  monthlyProgress: number;
  name: string;
  nameEn: string;
  remainingHours: number;
  roles: string[];
  title: string;
  titleEn: string;
  totalModules: number;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResult {
  accessToken: string;
  agentId: string;
  avatar: string;
  email: string;
  id: string;
  name: string;
  nameEn: string;
  roles: string[];
  title: string;
  titleEn: string;
}

export interface UserInfoResult {
  agentId: string;
  avatar: string;
  email: string;
  id: string;
  name: string;
  nameEn: string;
  roles: string[];
  title: string;
  titleEn: string;
}
