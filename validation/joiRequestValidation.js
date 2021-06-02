const joi = require('joi');

const idParamsSchema = {
    params: joi.object({
        id: joi.number().required()
    }).unknown(false)
}

const postEmployeeBodySchema = {
    body: joi.object().keys({
        name: joi.string().max(128).required(),
        age: joi.number().max(120).required(),
        username: joi.string().trim().required(),
        password: joi.string().trim().required(),
    }).unknown(false)
}

const editEmployeeBodySchema = {
    body: joi.object().keys({
        name: joi.string().max(128).required(),
        age: joi.number().max(120).required(),
        isActive: joi.boolean().required()
    }).unknown(false)
}

const postDepartmentBodySchema = {
    body: joi.object().keys({
        name: joi.string().max(128).required()
    }).unknown(false)
}

const editDepartmentBodySchema = {
    body: joi.object().keys({
        name: joi.string().max(128).required()
    }).unknown(false)
}

const postEmployeeDepartmentBodySchema = {
    body: joi.object().keys({
        deptId: joi.number().required()
    }).unknown(false)
}

const postRoleBodySchema = {
    body: joi.object().keys({
        name: joi.string().max(128).required()
    }).unknown(false)
}

const editRoleBodySchema = {
    body: joi.object().keys({
        name: joi.string().max(128).required()
    }).unknown(false)
}

const postEmployeeRolesBodySchema = {
    body: joi.object().keys({
        roleId: joi.number().required()
    }).unknown(false)
}

const postEmployeeAddressesBodySchema = {
    body: joi.object().keys({
        housename: joi.string().trim().required(),
        city: joi.string().trim().required(),
        state: joi.string().trim().required(),
        pincode: joi.number().required(),
        street: joi.string().trim().required(),
    }).unknown(false)
}




module.exports = {
    idParamsSchema,
    postEmployeeBodySchema,
    editEmployeeBodySchema,
    postDepartmentBodySchema,
    editDepartmentBodySchema,
    postEmployeeDepartmentBodySchema,
    postRoleBodySchema,
    editRoleBodySchema,
    postEmployeeRolesBodySchema,
    postEmployeeAddressesBodySchema
};