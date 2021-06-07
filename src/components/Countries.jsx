import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

    table: {
        minWidth: 650,
        display: 'block'
    },
    tableContainer: {
        borderRadius: 15,
        margin: '20px',
        maxWidth: 1000,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        height: 100,
        textAlign: 'center',
        fontSize: 'large'


    },
    center: {
        textAlign: 'center'
    }
}));




const rows = [];
const url = 'https://restcountries.eu/rest/v2/all';
const Countries = () => {

    const [countries, setCountries] = useState([]);
    const fetchCountryData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
    }

    useEffect(() => {
        try {
            fetchCountryData();

        } catch (error) {
            console.log(error)
        }

    }, [])

    countries.map((country) => {
        const { name, flag, population, region, languages } = country;

        rows.push({
            flag: { flag }, name: { name }, population: { population }, region: { region }, languages: { languages }
        })
        return rows
    })

    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Flag</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Population</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Region</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Languages</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row) => (
                        < TableRow key={`${row.name.name}${Math.random()}`}>
                            <TableCell className={classes.center} component="th" scope="row">
                                <img src={row.flag.flag} alt={row.name.name} />

                            </TableCell>
                            <TableCell className={classes.center} >{row.name.name}</TableCell>
                            <TableCell className={classes.center}>{row.population.population}</TableCell>
                            <TableCell className={classes.center}>{row.region.region}</TableCell>
                            <TableCell className={classes.center}>{row.languages.languages.map((l) => <li key={l.name}>{l.name}</li>)}

                            </TableCell>
                            {/* {console.log(row.languages.languages)} */}
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );


};


export default Countries;