import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';  // Dit wordt gebruikt om het Mongoose-model te mocken
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let mockUserModel = {
    find: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('User'),  // Mock het Mongoose model voor 'User'
          useValue: mockUserModel,  // Gebruik het gemockte UserModel
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});