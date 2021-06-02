const express = require('express');
const validate = require('express-validation');
const rolController = require('../controller/roles');
const {
  postRoleBodySchema,
  editRoleBodySchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /roles
router.get('/', rolController.getAllRoles);

// GET => /roles/id
router.get('/:id', rolController.getRole);

// POST => /roles
router.post('/', validate(postRoleBodySchema), rolController.postRole);

// PUT => /roles/id
router.put('/:id', validate(editRoleBodySchema), rolController.editRole);

// DELETE => /roles/id
router.delete('/:id', rolController.deleteRole);

module.exports = router;