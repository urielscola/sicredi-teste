export const truncate = (string, max = 20) =>
  string.length > max ? `${string.substr(0, max)}...` : string;
