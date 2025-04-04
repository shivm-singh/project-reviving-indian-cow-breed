class CowService {
    static getAllCows() {
        const cows = JSON.parse(localStorage.getItem('cows')) || [];
        return cows.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

    static getCowById(id) {
        const cows = this.getAllCows();
        return cows.find(cow => cow.id === id);
    }

    static getCowsByOwner(ownerId) {
        const cows = this.getAllCows();
        return cows.filter(cow => cow.ownerId === ownerId);
    }

    static addCow(cow) {
        const cows = this.getAllCows();
        cows.push(cow);
        localStorage.setItem('cows', JSON.stringify(cows));
    }

    static updateCow(updatedCow) {
        let cows = this.getAllCows();
        cows = cows.map(cow => cow.id === updatedCow.id ? updatedCow : cow);
        localStorage.setItem('cows', JSON.stringify(cows));
    }

    static deleteCow(id) {
        let cows = this.getAllCows();
        cows = cows.filter(cow => cow.id !== id);
        localStorage.setItem('cows', JSON.stringify(cows));
    }
}