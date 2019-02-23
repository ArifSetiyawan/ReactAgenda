import * as React from 'react';
import { ScheduleComponent, Agenda, Month, Inject,
  ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
  import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

export default class App extends React.Component<{}, {}> {
  private dataManager: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/development/web-services/odata/',
    adaptor: new ODataV4Adaptor
  });
  private dataQuery: Query = new Query().from("Events").addParams('readOnly', 'true');
  public render() {
      return (
      <ScheduleComponent height='550px' selectedDate= {new Date()} eventSettings= { { dataSource: this.dataManager , query:this.dataQuery} }>
          <ViewsDirective>
            <ViewDirective option='Month' />
            <ViewDirective option='Agenda' />
          </ViewsDirective>
            <Inject services={[Month, Agenda]} />
          </ScheduleComponent>
      )
    }
  };