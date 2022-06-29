export interface EncryptionService {
  compare(hash: string, string: string): boolean;
  encrypt(string: string): string;
}
