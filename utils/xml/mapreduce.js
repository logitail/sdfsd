const mr = `<mapreducescript scriptid="customscript${scriptName}">
  <description></description>
  <isinactive>F</isinactive>
  <name>${fileName}</name>
  <notifyadmins>F</notifyadmins>
  <notifyemails></notifyemails>
  <notifyowner>T</notifyowner>
  <scriptfile>[${filePath}]</scriptfile>
  <scriptdeployments>
    <scriptdeployment scriptid="customdeploy${deployName}">
      <buffersize>1</buffersize>
      <concurrencylimit>1</concurrencylimit>
      <isdeployed>T</isdeployed>
      <loglevel>DEBUG</loglevel>
      <queueallstagesatonce>T</queueallstagesatonce>
      <runasrole>ADMINISTRATOR</runasrole>
      <status>NOTSCHEDULED</status>
      <title>${fileName}</title>
      <yieldaftermins>60</yieldaftermins>
      <recurrence>
        <single>
          <repeat></repeat>
          <startdate>${dateToday}</startdate>
          <startdate>yyyy-mm-dd</startdate>
          <starttime>17:00:00Z</starttime>
        </single>
      </recurrence>
    </scriptdeployment>
  </scriptdeployments>
</mapreducescript>`;