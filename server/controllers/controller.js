module.exports = {
  postHome: (req, res, next) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;

    db.post_house([name, address, city, state, zip, img, mortgage, rent])
      .then(houses => res.sendStatus(200).send(houses))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  },
  getHomes: (req, res, next) => {
    const db = req.app.get("db");
    console.log("endpoint hit");
    db.read_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  },

  updateHouse: (req, res, next) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;
    const { id } = req.params;

    db.update_home([id, name, address, city, state, zip, img, mortgage, rent])
      .then(houses => res.sendStatus(200).send(houses))
      .catch(err => {
        res.status(200).send({ errorMessage: "Whoops" });
        console.log(err, "whoops");
      });
  },

  deleteHouse: (req, res, next) => {
    const db = req.app.get("db");
    console.log("delete hit");
    const { id } = req.params;

    db.delete_house(id)
      .then(houses => res.sendStatus(200).send(houses))
      .catch(err => {
        res.status(500).send({ errorMessage: "yikes" });
        console.log(err);
      });
  }
};
