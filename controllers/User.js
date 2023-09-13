const UserModel = require('../model/User');

// Create a new person
exports.create = async (req, res) => {
    try {
        const { fullName, description } = req.body;
        
        if (!fullName || !description) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const person = new UserModel({ fullName, description });
        const data = await person.save();

        res.status(201).send({
            message: "A new user added successfully!!",
            person: data
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a person"
        });
    }
};

// Find all users
exports.findAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find a person by ID
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a user by ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated user
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a user by ID
exports.destroy = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
