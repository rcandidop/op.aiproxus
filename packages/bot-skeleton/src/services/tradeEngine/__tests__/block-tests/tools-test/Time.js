import { run } from '../../tools';

describe('Time in tools', () => {
    let result;

    beforeAll(done => {
        run(
            `
      (function() {
        var result = {};
        result.time1 = Bot.getTime();
        sleep(2)
        result.time2 = Bot.getTime();
        return result;
      })()
    `
        ).then(v => {
            result = v;
            done();
        });
    });

    it('time is correctly skewed', () => {
        const { time1, time2 } = result;

        expect(time2 - time1).toBeLessThanOrEqual(3);
    });
});
