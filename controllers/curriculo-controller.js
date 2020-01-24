const curriculoModel = require("../models/curriculo-model");

exports.getData = () => {
    return curriculoModel;
}

exports.getName = () => {
    return curriculoModel.name;
}

exports.getSurname = () => {
    return curriculoModel.surname;
}

exports.getSchool = () => {
    return curriculoModel.name;
}

exports.getSchoolDescription = () => {
    return curriculoModel.schoolDescription;
}

exports.getExperience = () => {
    return curriculoModel.experience;
}

exports.getWorksDone = () => {
    return curriculoModel.worksDone;
}

exports.getSkill = () => {
    return curriculoModel.skills;
}
