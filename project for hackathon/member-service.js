class MemberService {
    static getAllMembers() {
        const members = JSON.parse(localStorage.getItem('members')) || [];
        return members.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

    static getMemberById(id) {
        const members = this.getAllMembers();
        return members.find(member => member.id === id);
    }

    static addMember(member) {
        const members = this.getAllMembers();
        members.push(member);
        localStorage.setItem('members', JSON.stringify(members));
    }

    static updateMember(updatedMember) {
        let members = this.getAllMembers();
        members = members.map(member => member.id === updatedMember.id ? updatedMember : member);
        localStorage.setItem('members', JSON.stringify(members));
    }

    static deleteMember(id) {
        let members = this.getAllMembers();
        members = members.filter(member => member.id !== id);
        localStorage.setItem('members', JSON.stringify(members));
    }
}