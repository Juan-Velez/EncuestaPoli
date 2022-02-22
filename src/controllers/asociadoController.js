const controllerAsociado = {};

controllerAsociado.list = (req, res) => {
    var asociado = null;
    var vacuna = null;
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

module.exports = controllerAsociado;