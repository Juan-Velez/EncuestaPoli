const controllerIasociado = {};

controllerIasociado.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Vacunas', (err, vacuna) => {
            vacuna = vacuna;
            console.log(vacuna);
            if (err) {
                res.json(err);
            }
        });
        conn.query('SELECT *FROM Asociados', (err, asociado) => {
            if (err) {
                res.json(err);
            }
            console.log(asociado);
            res.render('iasociado', {
                data: asociado
            });
        });
    });
};

controllerIasociado.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Asociados WHERE id = ?', [id], (err, asociado) => {
            res.render('asociado_edit', {
                data: asociado[0]
            });
        });
    });
};

controllerIasociado.update = (req, res) => {
    const { id } = req.params;
    const nuevaAsociado = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Asociados set ? WHERE id = ?', [nuevaAsociado, id], (err, asociado) => {
            res.redirect('/iasociado');
        });
    });
};

controllerIasociado.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Asociados WHERE id = ?', [id], (err, rows) => {
            res.redirect('/iasociado');
        });
    })
};

module.exports = controllerIasociado;