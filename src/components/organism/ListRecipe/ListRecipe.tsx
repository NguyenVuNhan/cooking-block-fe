import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

const ListRecipe: FunctionComponent = () => {
  const history = useHistory();
  const recipes = [{}];

  const toRecipe = (id: string | undefined) => () => {
    history.push(`/recipe/${id}`);
  };

  return (
    <Grid container spacing={3}>
      {recipes.length === 0 ? (
        <Typography variant="h5" align="center" className="w-100 text-muted">
          No result
        </Typography>
      ) : (
        recipes.map((recipe, index) => (
          <Grid key={index} item md={4} xs={3}>
            <Card>
              <CardContent>
                {/* <Typography variant="h3">{recipe.title}</Typography> */}
                <div className="d-flex align-item-center">
                  <AccessTimeIcon className="mr-1" />
                  {/* <Typography>{recipe.duration} min</Typography> */}
                </div>
                {/* <Typography>{recipe.description}</Typography> */}
              </CardContent>
              <CardActions>
                {/* <Button onClick={toRecipe(recipe.id)}>View recipe</Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ListRecipe;
