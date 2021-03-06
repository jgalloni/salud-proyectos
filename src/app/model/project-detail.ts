import { Leader } from './leader';
import { Application } from './application';
import { Risk } from './risk';
import { Activity } from './activity'
import { ClientRelation } from './enums/client-relation.enum';
import { TeamMood } from './enums/team-mood.enum';

export class ProjectDetail {
  public code: string;
  //datos del modelo proyecto
  public dateFrom: Date;
  public dateTo: Date;
  public applications: Application[];
  public clientLeaderName: string;
  public clientRelation : ClientRelation;
  public assignedPeopleCount: number;
  public notAssignedPeopleCount: number;
  public averageRotation: number;
  public teamMood: TeamMood;
  public activities: Activity[];
  public risks: Risk[];

  constructor(){};
/*
  constructor(name: string, dateFrom: string, dateTo: string, applications: Application[], leader: Leader,
      clientRelation : ClientRelation, assignedPeopleCount: number, notAssignedPeopleCount: number,
      averageRotation: number, teamMood: TeamMood, activities: string[], risks: Risk[]){
    this.name = name;
    this.dateFrom = new Date(dateFrom);
    this.dateTo = new Date(dateTo);
    this.applications = applications;
    this.leader = leader;
    this.clientRelation = clientRelation;
    this.assignedPeopleCount = assignedPeopleCount;
    this.notAssignedPeopleCount = notAssignedPeopleCount;
    this.averageRotation = averageRotation;
    this.teamMood = teamMood;
    this.activities = activities;
    this.risks = risks;
  }
*/
/*
  getName(): string {
    return this.name;
  }
  getDateFrom() : Date {
    return this.dateFrom;
  }
  getDateTo() : Date {
    return this.dateTo;
  }
  getApplications(): Application[] {
    return this.applications;
  }
  getClientLeader(): string {
    return this.clientLeader;
  }
  getClientRelation(): ClientRelation {
    return this.clientRelation;
  }
  getAssignedPeopleCount(): number {
    return this.assignedPeopleCount;
  }
  getNotAssignedPeopleCount(): number {
    return this.notAssignedPeopleCount;
  }
  getAverageRotation(): number {
    return this.averageRotation;
  }
  getTeamMood(): TeamMood {
    return this.teamMood;
  }
  getActivities(): Activity[] {
    return this.activities;
  }
  getRisks(): Risk[] {
    return this.risks;
  }

  setName(name: string) {
    this.name = name;
  }
  setDateFrom(dateFrom: Date) {
    this.dateFrom = dateFrom;
  }
  setDateTo(dateTo: Date) {
    this.dateTo = dateTo;
  }
  setApplications(applications: Application[]) {
    this.applications = applications;
  }
  setClientLeader(clientLeader: string) {
    this.clientLeader = clientLeader;
  }
  setClientRelation(clientRelation: ClientRelation) {
    this.clientRelation = clientRelation;
  }
  setAssignedPeopleCount(assignedPeopleCount :number) {
    this.assignedPeopleCount = assignedPeopleCount;
  }
  setNotAssignedPeopleCount(notAssignedPeopleCount: number) {
    this.notAssignedPeopleCount = notAssignedPeopleCount;
  }
  setAverageRotation(averageRotation: number) {
    this.averageRotation = averageRotation;
  }
  setTeamMood(teamMood: TeamMood) {
    this.teamMood = teamMood;
  }
  setActivities(activities: Activity[]) {
    this.activities = activities;
  }
  setRisks(risks: Risk[]) {
    this.risks = risks;
  }
*/
}
