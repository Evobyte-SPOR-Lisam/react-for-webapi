import { useEffect, useState } from "react";
import { Person } from "../../models/Person";
import DetailsPerson from "./details-person";
import { useNavigate } from "react-router-dom";
import {
	Button,
	Container,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function ShowAllPersons() {
	const navigate = useNavigate();
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5283/api/people")
			.then((response) => response.json())
			.then((data) => setPersons(data));
	}, []);

	return (
		<Container maxWidth="md">
			<h1>Persons</h1>
			<Button variant="contained">Add person</Button> <p>Here is a list of all persons</p>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Operations</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{persons.map((person: Person, i: number) => (
							<TableRow key={person.id}>
								<TableCell>{i + 1}</TableCell>
								<TableCell>{person.name}</TableCell>
								<TableCell>
									<Button onClick={() => navigate(`/persons/details/${person.id}`)}>Details</Button>{" "}
									| <Button>Edit</Button> |{" "}
									<IconButton color="primary">
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
