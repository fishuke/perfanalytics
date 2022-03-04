import { Test } from '@nestjs/testing';
import { ReportModule } from '../src/modules/report/report.module';
import { ReportService } from '../src/modules/report/report.service';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('Reports', () => {
  let app: NestFastifyApplication;

  const reportsService = new ReportService();
  const dummyData: Report = {
    domLoad: 0,
    createdAt: 0,
    firstContentfulPaint: 0,
    timeToFirstByte: 0,
    windowLoad: 0,
    resources: [
      {
        name: 'google.com/style.css',
        initiatorType: 'css',
        duration: 100,
        transferSize: 50,
      },
    ],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ReportModule],
    })
      .overrideProvider(ReportService)
      .useValue(reportsService)
      .compile();

    app = moduleRef.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
  });

  it(`/GET report`, () => {
    return app
      .inject({
        method: 'GET',
        url: '/reports?start-time=1&end-time=1',
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(JSON.parse(result.payload)).toBeInstanceOf(Array);
      });
  });

  it(`/POST report`, () => {
    return app
      .inject({
        method: 'POST',
        url: '/reports',
        payload: dummyData,
      })
      .then((result) => {
        expect(result.statusCode).toEqual(201);
        expect(result.payload).toBe('Report saved.');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
