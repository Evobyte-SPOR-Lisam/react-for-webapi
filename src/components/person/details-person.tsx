import { Person } from "../../models/Person";

export default function DetailsPerson({ person }: { person: Person }) {
	return (
		<>
			<h1>Details for {person.name}</h1>
			<table>
				<tbody>
					<tr>
						<th>Id</th>
						<td>{person.id}</td>
					</tr>
					<tr>
						<th>Name</th>
						<td>{person.name}</td>
					</tr>
					<tr>
						<th>Date of birth</th>
						<td>{person.dateOfBirth}</td>
					</tr>
				</tbody>
			</table>

			<button>Back</button>
		</>
	);
}
