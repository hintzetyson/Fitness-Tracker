const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter the exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the exercise"
                },
                duration: {
                    type: Number,
                    required: "Enter the exercise duration in minutes"
                },
                weight: {
                    type: Number,
                    required: "Enter your weight in pounds"
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout