const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const mongoose = require('mongoose');

const app = require('./index'); 
const bookingsModel = require('./model/bookings');

chai.use(chaiHttp);

describe('Backend Tests', () => {
  before((done) => {
    // Connect to a test database before running the tests
    mongoose
      .connect(process.env.MONGO, { useNewUrlParser: true })
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    // Disconnect from the test database after running the tests
    mongoose.disconnect().then(() => done());
  });

  beforeEach((done) => {
    // Clear the bookings collection before each test
    bookingsModel.deleteMany({})
      .then(() => done())
      .catch((err) => done(err));
  });

  describe('GET /api/booking', () => {
    it('should return the latest booking', (done) => {
      // Add a dummy booking to the database
      const dummyBooking = new bookingsModel({
        movie: 'Dummy Movie',
        slot: 'Dummy Slot',
        seats: ['A1', 'A2'],
      });
      dummyBooking.save()
        .then(() => {
          // Send GET request to the booking route
          chai.request(app)
            .get('/api/booking')
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.movie).to.equal('Dummy Movie');
              expect(res.body.slot).to.equal('Dummy Slot');
              expect(res.body.seats).to.deep.equal(['A1', 'A2']);
              done();
            });
        })
        .catch((err) => done(err));
    });
  });

  describe('POST /api/booking', () => {
    it('should create a new booking', (done) => {
      const newBooking = {
        movie: 'New Movie',
        slot: 'New Slot',
        seats: ['B1', 'B2'],
      };

      chai.request(app)
        .post('/api/booking')
        .send(newBooking)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.movie).to.equal('New Movie');
          expect(res.body.slot).to.equal('New Slot');
          expect(res.body.seats).to.deep.equal(['B1', 'B2']);

          // Verify the new booking is saved in the database
          bookingsModel.find({})
            .then((bookings) => {
              expect(bookings.length).to.equal(1);
              expect(bookings[0].movie).to.equal('New Movie');
              expect(bookings[0].slot).to.equal('New Slot');
              expect(bookings[0].seats).to.deep.equal(['B1', 'B2']);
              done();
            })
            .catch((err) => done(err));
        });
    });
  });
});
