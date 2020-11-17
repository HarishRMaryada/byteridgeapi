const express = require('express');
const router = express.Router();
const auditService = require('./audit.service');
const authz = require('../_helpers/authz')

// routes
router.get('/',authz.checkRoleAccess('AUDITOR'), getAll);

module.exports = router;

function getAll(req, res, next) {
    auditService.getAll()
        .then(audits => res.json(audits))
        .catch(err => next(err));
}
