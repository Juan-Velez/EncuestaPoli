const controllerVacuna = {};

controllerVacuna.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Vacunas', (err, vacuna) => {
            if (err) {
                res.json(err);
            }
            console.log(vacuna);
            res.render('vacuna', {
                data: vacuna
            });
        });
    });
};

controllerVacuna.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Vacunas set ?', [data], (err, vacuna) => {
            res.redirect('/vacuna');
        });
    });
};

controllerVacuna.edit = (req, res) => {
    const { id_vacuna  } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Vacunas WHERE id_vacuna = ?', [id_vacuna], (err, vacuna) => {
            res.render('vacuna_edit', {
                data: vacuna[0]
            });
        });
    });
};

controllerVacuna.update = (req, res) => {
    const { id_vacuna  } = req.params;
    const nuevaVacuna = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Vacunas set ? WHERE id_vacuna = ?', [nuevaVacuna, id_vacuna ], (err, vacuna) => {
            res.redirect('/vacuna');
        });
    });
};

controllerVacuna.delete = (req, res) => {
    const { id_vacuna } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Vacunas WHERE id_vacuna = ?', [id_vacuna], (err, rows) => {
            res.redirect('/vacuna');
        });
    })
};

module.exports = controllerVacuna;