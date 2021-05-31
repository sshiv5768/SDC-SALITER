function Contact() {
  return (
    <>
      <section class="pt-8 pt-md-11 pb-8 pb-md-14 my-2">
        <div id="contact" class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h2 class="fw-bold">Let us hear from you directly!</h2>

              <p class="fs-lg text-muted mb-7 mb-md-9">
                We always want to hear from you! Let us know how we can best
                help you and we'll do our very best.
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-12 col-lg-10">
              <form>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group mb-5">
                      <label class="form-label" for="contactName">
                        Full name
                      </label>

                      <input
                        class="form-control"
                        id="contactName"
                        type="text"
                        placeholder="Full name"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group mb-5">
                      <label class="form-label" for="contactEmail">
                        Email
                      </label>

                      <input
                        class="form-control"
                        id="contactEmail"
                        type="email"
                        placeholder="hello@domain.com"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group mb-7 mb-md-9">
                      <label class="form-label" for="contactMessage">
                        What can we help you with?
                      </label>

                      <textarea
                        class="form-control"
                        id="contactMessage"
                        rows="5"
                        placeholder="Tell us what we can help you with!"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary lift">
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
