// MANY 2 MANY -----------------------------------------------------------------
// Lives In --------------------------------------------------------------------
app.get("/lives_in/:id", (req, res) => {
  const lives_in_id = req.params.id;
  const getOneLivesIn = `SELECT animals.species_name, habitats.environment
    FROM animals, habitats
    JOIN lives_in
    ON animals.animal_id = lives_in.animal_id
    AND habitats.habitat_id = lives_in.habitat_id
    WHERE animals.animal_id = ${lives_in_id}`;

  database.all( getOneLivesIn, (error, results) => {
    if (error) {
      console.error(`Get lives in with ID ${lives_in_id} failed`, error);
      res.sendStatus(500);
    }
    else {
      console.log(`Lives In with ID ${lives_in_id} was gotten successfully!`);
      res.status(200).json(results);
    }
  });
});

// MANY 2 MANY -----------------------------------------------------------------
// Habitat For -----------------------------------------------------------------

// MANY 2 MANY -----------------------------------------------------------------
// SELF-JOIN -------------------------------------------------------------------
// Can Hunt --------------------------------------------------------------------
app.get("/can_hunt/:id", (req, res) => {
  const can_hunt_id = req.params.id;
  const getOneCanHunt =
    `SELECT v1.species_name AS pred, v2.species_name AS prey
    FROM animals AS v1
    JOIN animals AS v2
    JOIN can_hunt
    ON v1.animal_id = can_hunt.animal_predator_id
    AND v2.animal_id = can_hunt.animal_prey_id
    AND v1.animal_id = ${can_hunt_id}`
  database.all( getOneCanHunt, (error, results) => {
    if (error) {
      console.error(`Get can hunt with ID ${can_hunt_id} failed`, error);
      res.sendStatus(500);
    }
    else {
      console.log(`Can Hunt with ID ${can_hunt_id} was gotten successfully!`);
      res.status(200).json(results);
    }
  });
});

// MANY 2 MANY -----------------------------------------------------------------
// Is Prey Of ------------------------------------------------------------------


//==============================================================================
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CREATE NEW<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//==============================================================================

// Animals ---------------------------------------------------------------------
app.post("/animals", (req, res) => {
  const animalInputSpeciesName = req.body.species_name;
  const animalInputLifeExpectancy = req.body.life_expectancy;
  // const animalInputID= req.body.animal_id;

  //---------------------GET LARGEST ID-----------------------------------------
  const getLargestID = `SELECT MAX(oid) FROM animals`;
  database.all( getLargestID, (error, results) => {
    if (error) {
      console.error("Get largest ID failure: ", error);
      res.sendStatus(500);
    }
    else {
      // console.log('results', results);
      let maxAnimalID = (results[0]["MAX(oid)"] + 1);
      // console.log("maxID: ", maxAnimalID);
      const createNewAnimal =
        `INSERT INTO animals VALUES (?, ?, ?)`;
      // console.log(maxAnimalID);
      database.run( createNewAnimal,
        [animalInputSpeciesName, animalInputLifeExpectancy, maxAnimalID],
        (error) => {
          if (error) {
            console.error("Create new animal failure: ", error);
            res.sendStatus(500);
          }
          else {
            console.log("Create new animal succeeded!");
            res.sendStatus(200);
          }
      });
    }
  });
});
