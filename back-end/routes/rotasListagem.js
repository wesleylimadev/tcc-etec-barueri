const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.get('/clientes', (req, res) => {
    const sql = 'SELECT * from tbl_cliente'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/enderecos', (req, res) => {
    const sql = 'SELECT * from tbl_endereco'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/fornecedores', (req, res) => {
    const sql = 'SELECT * from tbl_fornecedor'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/categorias', (req, res) => {
    const sql = 'SELECT * from tbl_categoria'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/formaspagamento', (req, res) => {
    const sql = 'SELECT * from tbl_forma_pagamento'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/pedidos', (req, res) => {
    const sql = 'SELECT * from tbl_pedido'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/servicos', (req, res) => {
    const sql = 'SELECT * from tbl_servicos'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }

    })
})

router.get('/classificacoes', (req, res) => {
    const sql = 'SELECT * from tbl_classificacao'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

router.get('/agendas', (req, res) => {
    const sql = 'SELECT * from tbl_agenda'

    connection.query(sql, (error, rows, fields) => {
        if (!error) {
            res.send(rows)
        } else {
            res.send('Erro ao listar dados!')
        }
    })
})

module.exports = router