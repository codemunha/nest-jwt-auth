import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';
const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'test', // get env vars
      resave: false,
      saveUninitaialized: false,
      cookie: { maxAge: 360000 },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`);
  });
}
bootstrap();
