// Initialize data if not exists
function initializeData() {
    if (!localStorage.getItem('cows')) {
        const sampleCows = [
            {
                id: 'cow-1',
                name: 'Daisy',
                tagNumber: 'F-1001',
                breed: 'Holstein',
                status: 'active',
                dateOfBirth: '2020-05-15',
                weight: 600,
                description: 'Primary milking cow, very productive',
                ownerId: 'member-1',
                purchaseDate: '2021-03-10',
                purchasePrice: 1500,
                vaccinations: [
                    {
                        date: '2023-01-15',
                        name: 'Bovine Viral Diarrhea',
                        nextDue: '2024-01-15',
                        notes: 'No adverse reactions'
                    }
                ],
                medicalHistory: [
                    {
                        date: '2022-11-20',
                        issue: 'Mastitis',
                        treatment: 'Antibiotics',
                        notes: 'Recovered fully after treatment'
                    }
                ],
                notes: 'Excellent milk production. Needs to be monitored for mastitis.',
                createdAt: '2021-03-10T10:00:00Z',
                updatedAt: '2023-06-01T14:30:00Z'
            },
            {
                id: 'cow-2',
                name: 'Bella',
                tagNumber: 'F-1002',
                breed: 'Jersey',
                status: 'active',
                dateOfBirth: '2019-08-22',
                weight: 450,
                description: 'Small but efficient milk producer',
                ownerId: 'member-1',
                purchaseDate: '2020-05-18',
                purchasePrice: 1200,
                vaccinations: [
                    {
                        date: '2023-02-10',
                        name: 'Bovine Viral Diarrhea',
                        nextDue: '2024-02-10',
                        notes: ''
                    }
                ],
                medicalHistory: [],
                notes: '',
                createdAt: '2020-05-18T09:15:00Z',
                updatedAt: '2023-02-10T11:20:00Z'
            }
        ];
        localStorage.setItem('cows', JSON.stringify(sampleCows));
    }

    if (!localStorage.getItem('members')) {
        const sampleMembers = [
            {
                id: 'member-1',
                name: 'John Smith',
                role: 'owner',
                email: 'john@example.com',
                phone: '(555) 123-4567',
                address: '123 Farm Rd, Countryside',
                dateOfBirth: '1980-07-15',
                gender: 'male',
                emergencyContact: 'Mary Smith',
                emergencyPhone: '(555) 987-6543',
                position: 'Farm Owner',
                joinDate: '2015-01-10',
                salary: 0,
                salaryType: '',
                workSchedule: 'Full-time',
                benefits: 'Health insurance, housing',
                notes: 'Primary farm owner. Very experienced.',
                createdAt: '2015-01-10T08:00:00Z',
                updatedAt: '2023-05-20T16:45:00Z'
            },
            {
                id: 'member-2',
                name: 'Maria Garcia',
                role: 'worker',
                email: 'maria@example.com',
                phone: '(555) 555-1234',
                address: '456 Worker Lane, Farmtown',
                dateOfBirth: '1990-11-22',
                gender: 'female',
                emergencyContact: 'Carlos Garcia',
                emergencyPhone: '(555) 555-5678',
                position: 'Milker',
                joinDate: '2021-03-15',
                salary: 15,
                salaryType: 'hourly',
                workSchedule: 'Mon-Fri, 6am-2pm',
                benefits: '',
                notes: 'Excellent worker. Very reliable.',
                createdAt: '2021-03-15T07:30:00Z',
                updatedAt: '2023-04-10T12:15:00Z'
            }
        ];
        localStorage.setItem('members', JSON.stringify(sampleMembers));
    }
}

// Initialize when app loads
initializeData();