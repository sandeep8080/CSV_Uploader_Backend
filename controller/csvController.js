const uploadCSVModel = require('../model/schema');
const csvToJson = require('csvjson-csv2json');
const uuidV1 = require('uuid');

exports.saveCSVData = async (req, res) => {
    try {
        const { csvString } = req.body;
        const csvJSONData = csvToJson(csvString, { parseNumbers: true });
        csvJSONData.forEach((item, index) => {
            item.id = index + 1;
        });
        //console.log(csvJSONData);
        const saveCSVData = await uploadCSVModel.insertMany(csvJSONData);
        res.status(200).send({
            status: "Success",
            message: "Records added successfully"

        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: "Error",
            message: "Error while Updating the records"
        })
    }
};

exports.getData = async (req, res) => {
    try {
        const CSVData = await uploadCSVModel.find({});
        res.status(200).send({
            status: "Success",
            message: "Fetched CSV Data Succcessfully",
            data: CSVData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: "Error",
            message: "Fetched Failed"
        })
    }
};

exports.resetData = async (req, res) => {
    try {
        const resetCsvData = await uploadCSVModel.deleteMany();
        console.log(resetCsvData);
        res.status(200).send({
            status: "Success",
            message: "Data Reset Successfully"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            status: "Error",
            message: "Operation failed"
        });
    }
};