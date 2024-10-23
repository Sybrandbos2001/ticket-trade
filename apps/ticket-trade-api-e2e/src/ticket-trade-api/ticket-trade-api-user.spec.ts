import axios from 'axios';

describe('Create a new user with correct data', () => {
  it('/POST api/user (create a user)', async () => {
    const res = await axios.post(`/api/user`, {
        name: 'John',
        lastname: 'Doe',
        username: 'John.Doe',
        phone: '+31 6 12345678',
        email: 'john.doe@example.com',
        password: 'Password@123',
    });

    expect(res.status).toBe(201);

    expect(res.data.message).toBe('User created successfully');
    
    expect(res.data.user).toHaveProperty('_id');
    expect(res.data.user.name).toBe('John');
    expect(res.data.user.lastname).toBe('Doe');
    expect(res.data.user.username).toBe('John.Doe');
    expect(res.data.user.phone).toBe('+31 6 12345678');
    expect(res.data.user.email).toBe('john.doe@example.com');
    
    expect(res.data.user.tickets).toEqual([]);
  });
});

describe('Create a new user with a weak password', () => {
    it('/POST api/user (create a user)', async () => {
      try{
        const res = await axios.post(`/api/user`, {
            name: 'Simon',
            lastname: 'Doe',
            username: 'Simon.Doe',
            phone: '+31 6 12345678',
            email: 'Simon.doe@example.com',
            password: 'Welkom',
        });
      } catch (error){  
        expect(error.response.status).toBe(400);
        expect(error.response.data.message[0]).toBe('password is not strong enough');
      }
    });
  });