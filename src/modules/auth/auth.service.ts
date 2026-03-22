import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(payload: LoginDto) {
    return {
      message: 'Implement JWT or session login here.',
      email: payload.email,
      roles: ['Super Admin'],
    };
  }

  getRoleBlueprint() {
    return [
      'Super Admin',
      'Editor',
      'AI Operator',
      'Compliance Reviewer',
      'Company Manager',
      'Frontend API User',
    ];
  }
}
