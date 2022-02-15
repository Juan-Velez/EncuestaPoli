const controllerAsociado = {};

controllerAsociado.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Asociados', (err, asociado) => {
            asociado = asociado;
            console.log(asociado);
            if (err) {
                res.json(err);
            }
        });
        conn.query('SELECT *FROM Vacunas', (err, vacuna) => {
            vacuna = vacuna;
            console.log(vacuna);
            if (err) {
                res.json(err);
            }
            res.render('index', {
                asociado: asociado,
                vacuna: vacuna
            });
        });
    });
};

controllerAsociado.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Asociados set ?', [data], (err, asociado) => {
            res.redirect('/');
        });
    });
};

controllerAsociado.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Asociados WHERE id = ?', [id], (err, asociado) => {
            res.render('empleado_edit', {
                data: asociado[0]
            });
        });
    });
};

controllerAsociado.update = (req, res) => {
    const { id } = req.params;
    const nuevoAsociado= req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Asociados set ? WHERE id = ?', [nuevoAsociado, id], (err, asociado) => {
            res.redirect('/');
        });
    });
};

controllerAsociado.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Asociados WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
};

module.exports = controllerAsociado;