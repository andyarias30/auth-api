
import { onRequest } from "firebase-functions/v2/https";
import express from 'express';
import cors from 'cors';
import { createUser } from "./src/users.js";
import { getAllRecipes ,createRecipe } from "./src/recipes.js";
import { isAuthenticated } from "./src/middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

// Non-protected routes:
app.post('/user', createUser);
app.post('/user/login', login);
app.get('/recipes',isAuthenticated, getAllRecipes);

// Proctected routes:
app.post('/recipes',isAuthenticated, createRecipe);// isAuthenticated between the place and the create function 
// app.patch('/recipe/:recipeId', updateRecipe);

export const api = onRequest(app);


