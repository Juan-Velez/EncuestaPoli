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
    const { idVacuna } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Vacunas WHERE idVacuna = ?', [idVacuna], (err, vacuna) => {
            res.render('vacuna_edit', {
                data: vacuna[0]
            });
        });
    });
};

controllerVacuna.update = (req, res) => {
    const { idVacuna } = req.params;
    const nuevaVacuna = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Vacunas set ? WHERE idVacuna = ?', [nuevaVacuna, idVacuna], (err, vacuna) => {
            res.redirect('/vacuna');
        });
    });
};

controllerVacuna.delete = (req, res) => {
    const { idVacuna } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Vacunas WHERE idVacuna = ?', [idVacuna], (err, rows) => {
            res.redirect('/vacuna');
        });
    })
};

module.exports = controllerVacuna;