import React, {useContext} from 'react';
import {Form, Formik} from 'formik';
import {Button, Card, CardActions, CardContent, CardHeader, Grid, TextField} from "@material-ui/core";
import * as Yup from "yup";
import {GlobalContext} from '../context/GlobalState';

const validationSchema_tran = Yup.object().shape({
    text: Yup.string().min(3, "min length is 3 chars").required("Text is required"),
    amount: Yup.number("Please Enter a valid number").required("Amount is required"),
});

function AddTransaction(props) {
    const {addTransaction} = useContext(GlobalContext);
    return (
        <Formik
            initialValues={{text: '', amount: 0}}
            validationSchema={validationSchema_tran}
            onSubmit={async (values) => {
                try {
                    const newTransaction = {
                        id: Math.floor(Math.random() * 100000000),
                        text: values.text,
                        amount: +values.amount
                    }

                    addTransaction(newTransaction);
                } catch (e) {
                    console.log(e)
                }
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isSubmitting,
              }) => (
                <Form>
                    <Card>
                        <CardHeader title={"Add New Transactions"}/>
                        <CardContent>
                            <Grid container spacing={3} alignItems={"center"}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name={'text'}
                                        label={'Text'}
                                        helperText={touched.text ? errors.text : ""}
                                        error={touched.text && Boolean(errors.text)}
                                        variant={"outlined"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.text}
                                        // color={"secondary"}
                                        style={{width: "100%"}}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name={'amount'}
                                        label={'Amount'}
                                        helperText={touched.amount ? errors.amount : ""}
                                        error={touched.amount && Boolean(errors.amount)}
                                        variant={"outlined"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.amount}
                                        // color={"secondary"}
                                        style={{width: "100%"}}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Button type={"submit"} variant={"contained"} color={"primary"} disabled={isSubmitting} >Add transaction</Button>
                        </CardActions>
                    </Card>
                </Form>
            )}
        </Formik>
    );
}

export default AddTransaction;